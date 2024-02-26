import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
             <footer className="mt-20 bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className='ml-8'>
            <h4 className=" text-lg font-bold mb-4">Contact</h4>
            <p>Email: support@pwskills.com</p>
            <p>Phone: +91 8867917516</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>FAQ</li>
              <li>Job assistance</li>
              <li>Privacy policy</li>
              <li>Terms and condition</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul>
              <li>PW Skills Lab</li>
              <li>Job Portal</li>
              <li>Experience Portal</li>
              <li>Become an affiliate</li>
              <li>Hall Of fame</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Social Media</h4>
            <ul>
              <li> <BsFacebook /></li>
              <BsLinkedin />
              <li> <BsTwitter /></li>
              <li> <BsInstagram /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </>
    );

}

export default Footer;