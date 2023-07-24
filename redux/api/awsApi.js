export const uploadMediaToAws = async(file, presignedUrl) => {
    console.log("Upload start");
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {  
              resolve(presignedUrl);
            } else {
              reject(new Error('Upload failed'));
            }
          }
        };
        xhr.open('PUT', presignedUrl);
        xhr.setRequestHeader('Content-Type', file.type === 'video' ? "video/mp4" :'image/jpeg'); 
        xhr.upload.addEventListener("progress", (event) => {
          console.log(event);
        });
        xhr.send({ uri: file.uri, type: file.type === 'video' ? "video/mp4" :'image/jpeg', name: file.type === 'video' ? "video.mp4" :'image.jpg' });
      });
};


export const uploadMediasToAws = async (presignenUrls, medias)=>{
   return new Promise((resolve, reject)=>{
        let rs = []
        presignenUrls.forEach(async (tmp,i)=>{
            let presignenUrl = tmp
            let file = medias[i]
            uploadMediaToAws(file, presignenUrl).then((result) => {
              rs.push(getNameWithUrl(result, file.type))
              console.log('Upload completed' );
              if(rs.length === presignenUrls.length)
                  resolve(rs)
            })
            .catch((error) => {
              console.error('Upload error:', error);
              reject(error)
            });
          })
    })
}

let getNameWithUrl = (presignenUrl, type)=>{
    let src = presignenUrl.split("?")[0]
    return {src, type: type.toUpperCase()}
   }