const myHeaders = new Headers();
      myHeaders.append("X-Naver-Client-Id", "Ei3Bl6OlB53Z0rFC5IRT");
      myHeaders.append("X-Naver-Client-Secret", "kMBGlZySBD");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
        /* .then((response) => response.text()) */
        .then((response) => response.json())
        .then((result) =>{
          console.log(result.key);
        })
        .catch((error) => console.log("error", error));