import  './Freatures.css'
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
const Freatures = () => {
    return (
        <div className='feature-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading="Check it out"
            heading="Featured Items"
            ></SectionTitle>

            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-30 pb-20 py-8 px-16 gap-9'> 
                <div>
                    <img className='rounded-2xl	' src={featureImg} alt="" />
                </div>
                <div>
                    <p>Dec 6, 2020</p>
                    <p>Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur ipsum dolor consectetur. Odit in dicta, quam quidem natus quibusdam! Consectetur quos, nisi dolorum, facere eaque voluptates at distinctio, recusandae nemo ipsam reiciendis. Id vitae sapiente tenetur perferendis. Tempora temporibus accusamus expedita, minus eveniet harum laboriosam? Enim facilis fugit saepe!</p>
                    <button className=" text-slate-950 btn btn-outline border-0 border-b-4">order now</button>
                </div>
             
            </div>
        </div>
    );
};

export default Freatures;