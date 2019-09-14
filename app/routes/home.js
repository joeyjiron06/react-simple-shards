import Page from '../components/page';
const { useState } = React;
const { Button, Modal, ModalBody, ModalHeader } = window['shards-React'];

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <Page>
      <h1>Home Page</h1>

      <Button onClick={toggleModal}>Click Me!</Button>

      <Modal open={isModalVisible} toggle={toggleModal}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>👋 Hello there!</ModalBody>
      </Modal>
    </Page>
  );
};
