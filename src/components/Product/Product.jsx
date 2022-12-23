import styles from './Product.module.css';
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { useState } from 'react';

const Product = () => {

    const [modal, setModal] = useState(false);

    const [name, setName] = useState('');
    const [rate, setRate] = useState('');
    const [comment, setComment] = useState('');
    const [isError, setIsError] = useState(false);

    const submitHandler = () => {

        setIsError(false);

        if (name.length < 2 || name.length > 15) {
            setIsError(true);
            return;
        }

        alert(`Current state is : {"name": "${name}", "rating":"${rate}", "comment": "${comment}" }`);
        setRate('');
        setName('');
        setComment('');
        setModal(!modal);
    }


    return (
        <>
            <Modal size='m' isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <label className={styles.rateLabel}>Rating</label><br />
                    <select name="rating" className={styles.selectOpt} value={rate} onChange={(e) => setRate(e.target.value)}>
                        <option>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br />
                    <label className={styles.nameLabel}>Your Name</label><br />
                    <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} className={styles.nameField} /><br />

                    <div>
                        {isError && <p className={styles.errorMsg}>Must be greater than 2 and less than 15 charaters</p>}
                    </div>


                    <label className={styles.commentLabel}>Comment</label><br />
                    <textarea className={styles.textareaField} value={comment} onChange={(e) => setComment(e.target.value)}></textarea><br />


                    <div className={styles.submitBtn}>
                        <Button color="primary" onClick={submitHandler}>
                            Submit
                        </Button>
                    </div>

                </ModalBody>
            </Modal>


            <div className={styles.photo}>
                <img src="https://www.apple.com/newsroom/images/product/availability/geo/Apple-September-2022-launch-hero-geo_big.jpg.large.jpg" alt='' />
            </div>
            <div className={styles.photo}>
                <h5><em>Give your feedback comment here!!</em></h5>
            </div>
            <button className={styles.commentBtn} onClick={() => setModal(true)}>Comment</button>
        </>
    )
};

export default Product;