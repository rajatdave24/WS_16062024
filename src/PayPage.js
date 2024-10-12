import React,{useRef} from 'react';
import axios from 'axios';
import sha512 from 'js-sha512';
import CryptoJS from 'crypto-js';
import Base64 from "crypto-js/enc-base64";
import hmacSHA512 from "crypto-js/hmac-sha512"


const PayPage = () => {

    const payRef = useRef();

    const sha512 = (value) => {
        var hash = CryptoJS.SHA512(value);
        console.log(hash.toString(CryptoJS.enc.Hex))
        return hash.toString(CryptoJS.enc.Hex);    
    }

    const handlePay = async (e) => {       

      const TxnId =
        "ISKCON-JUHU-" +
        Date.now().toString() +
        Math.random().toString(36).substring(2, 15);

      const params = {
        key: "2fKjPt",
        txnid: TxnId,
        amount: payRef.current.value,
        productinfo: 'test pay',
        firstname: 'Rama Nama das',
        email: 'rajatdave24@gmail.com',
        phone: '9137969203',
      };

        console.log(payRef.current.value);

        const response = await axios.get("https://iskconjuhu.in/donate.php", {
            params: {
              key: "2fKjPt",
              txnid: TxnId,
              amount: payRef.current.value,
              productinfo: 'test pay',
              firstname: 'Rama Nama das',
              email: 'rajatdave24@gmail.com',
              phone: '9137969203',
              surl: "https:http://localhost:3000/success",
              furl: "https:http://localhost:3000/success",
              salt: "zBqitHlab9VU52l9ZDv8x5D1rxYBtgat",
              pg: "UPI",
            },
          });
          
          const htmlContent = response.data;
          console.log('htmlcontent',response,htmlContent);
          const newWindow = window.open();
          newWindow.document.open();
          newWindow.document.write(htmlContent);
          newWindow.document.close();
          window.close();

    }

    return(
        <>
            <p>Pay Page:</p>
            <input type="number" ref={payRef} onChange={(e)=>{e.target.value = Math.abs(e.target.value)}} onKeyDown={(e)=>{e.key ==='Enter'? alert('Done'): null}}/>
            <button onClick={handlePay}></button>
        </>
    );
}

export default PayPage;