import { storage } from '../configs/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const useStorage = (name) => {
  let listFiles = null;

  function uploadFile(files) {
    // for (let i = 0; i < files.length; i++) {
      const uploadFile = ref(storage, `${name}/${files.name + v4()}`);
      uploadBytes(uploadFile, files)
        .then(() => {
          console.log('uploadFile');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    // }
  }
  function getListFile() {
    const imageListRef = ref(storage, '/files');
    listAll(imageListRef).then((response) => {
    let item =  response.items[response.items.length-1]
      getDownloadURL(item)
    });
  }

  return { uploadFile, getListFile, listFiles };
};
export default useStorage;