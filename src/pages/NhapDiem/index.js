function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <button onClick={openModal}>Open Bootstrap Modal</button>
            <BootstrapModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default App;
