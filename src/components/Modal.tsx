import ReactDOM from 'react-dom';

interface ModalProps {
    show: boolean;
    onCloseButtonClick: any;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onCloseButtonClick, children }) => {
    const handleInnerDivClick = (e:React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    }

    if (!show) {
        return null
    }

    return ReactDOM.createPortal(
        <div
            onClick={onCloseButtonClick}
            className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50 z-50"
        >
            <div className="p-8 bg-white rounded-md w-[80%] md:w-[50%] h-[90%] overflow-y-scroll font-roboto" onClick={handleInnerDivClick}>
                <h2 className="mb-4 text-lg font-bold">
                    <button className="float-right" onClick={onCloseButtonClick}>
                        X
                    </button>
                </h2>
                <div className="body">{children}</div>
                {/* <div className="footer">
                    <button onClick={onCloseButtonClick}>Close Modal</button>
                </div> */}
            </div>
        </div>,
        document.body,
    )
}

export default Modal;
