import './styles.css'

export default function Card({ title, description, image, imgAlt }) {

    return (
        <main>
            <div className='card'>
                <img src={image} alt={imgAlt} />
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </main>
    )
}
