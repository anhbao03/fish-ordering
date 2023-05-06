import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import classes from '../styles/addFish.module.css'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'
import axios from 'axios'
import app from '../firebase'

const AddFish = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState('silver')
    const [price, setPrice] = useState(50)
    const [photo, setPhoto] = useState("")
    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if (session.status === 'loading') return

        if (session.status !== 'authenticated') {
            signIn()
        }
    }, [session.status])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const storage = getStorage(app)
        const filename = crypto.randomUUID() + photo.name
        const storageRef = ref(storage, filename)
        const uploadFile = uploadBytesResumable(storageRef, photo)

        uploadFile.on("state_changed",
            (snapshot) => {
                switch (snapshot.state) {
                    case 'paused':
                        console.log('upload is paused now')
                        break
                    case 'running':
                        console.log('upload is paused now')
                        break
                    default:
                        break
                }
            },
            (error) => {
                console.log(error)
            },
            async() => {
                const fileUrl = await getDownloadURL(uploadFile.snapshot.ref)
                postFish(fileUrl)
            }
        )
    }

    const postFish = async(imageUrl) => {
        try {
            const {data} = await axios.post('http://localhost:3000/api/fish/api/fish', {title, desc, category, price, image: imageUrl})
            router.push(`/fish/${data?._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <h2>Add Fish</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" placeholder='Desc...' onChange={(e) => setDesc(e.target.value)} />
                        <select onChange={(e) => setCategory(e.target.value)}>
                            <option disabled>Select Category</option>
                            <option value="silver">Silver</option>
                            <option value="highback">HighBack</option>
                            <option value="crossback">CrossBack</option>
                            <option value="red">Red</option>
                            <option value="strange">Strange</option>
                            <option value="acessory">Acessory</option>
                        </select>
                        <input type="number" placeholder='Price...' onChange={(e) => setPrice(e.target.value)} />
                        <div className={classes.imageField}>
                            <label htmlFor='image'>
                                Photo <AiOutlineFileImage size={25} />
                            </label>
                            <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setPhoto(e.target.files[0])} />
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddFish