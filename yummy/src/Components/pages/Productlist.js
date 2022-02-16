const [photos] = useState([
    {
        name:"Blue Buffalo Tastefuls",
        category: food
    },
    {
        name: "Blue Buffalo Dry dog Food",
        category: food,  
    },
    {
        name: "Cesar wet dog food",
        category: food,  
    }

]);

const currentPhotos = photos.filter(photo => photo.category === category);
const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);//current photo
};

return (
    <div>
        {isModalOpen && (
            <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
        )}
        
        <div className="flex-row">
            {currentPhotos.map((image, i) => (
                <img
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                />
            ))}

        </div>

    </div>
);
};


export default PhotoList;