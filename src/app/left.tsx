
import { Search, ThumbsDown, ThumbsUp } from "lucide-react";


export default function Left(){
    return(
        <main>
            <div id="left" >     
<div className="w-[500px]">      
  <div className="ml-80 flex space-x-12 justify-between items-center text-pir font-bold mb-2 border-2 rounded w-[457px] h-[56px] py-1 px-3 mt-5">
  <p>What can i help you with ?</p><Search/>
</div>
</div>

    <div className="ml-10 text-side mt-8">
        <h2 className="text-[22px] text-side mb-5 font-semibold">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
        <p className="text-[12px] mb-5">We want to make buying your favourite Nike shoes and gear online fast and easy and we accept the following payment options</p>
        <p className="text-[12px] ml-10 mb-5">Visa Mastercard Diners Club Discover American Express Visa Electron Maestro</p>
        <p className="text-[12px] ml-10 mb-5">If you enter your PAN information at checkout youll be able to pay for your order with PayTM or a local credit or debit card.</p>
        <p className="text-[12px] ml-10 mb-5">Apple Pay</p>
        <p className="text-[12px] mb-5">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If youre not already a Member join  <br/>us today.</p>
        </div>
    
        <div className="flex space-x-5 mt-5 ml-10">
        <button className="flex text-[12px] py-1 px-6 w-[106px] h-[39px] items-center text-center bg-black text-sec rounded-full">JOIN US</button>
        <button className="flex text-[12px] py-1 px-6 w-[129px] h-[39px] items-center text-center bg-black text-sec rounded-full">SHOP NIKE</button>
        </div>

        <div className="ml-10 mt-5 text-side text-[12px]">
            <p className="font-bold mb-2">Does my card need international purchases enabled?</p>
            <p className="leading-8">Yes we recommend asking your bank to enable international purchases on your card. You will be notified at checkout<br/> if international purchases need to be enabled.</p>
        </div>

        <p className="mb-3 ml-10">Please note some banks may charge a small transaction fee for international orders.</p>
    
        <div className="ml-10 mt-5 text-side text-[12px]">
            <p className="font-bold mb-2">Can I pay for my order with multiple methods?
        </p>
        <p> No payment for Nike orders cant be split between multiple payment methods.</p>
        </div>

    
        <div className="ml-10 mt-5 text-side text-[12px]">
            <p className="font-bold mb-2">What payment method is accepted for SNKRS orders?</p>
            <p>You can use any accepted credit card to pay for your SNKRS order.</p>
        </div>

    
        <div className="ml-10 mt-5 text-side text-[12px] mb-5">
            <p className="font-bold mb-2">Why dont I see Apple Pay as an option?</p>
            <p className="leading-8">To see Apple Pay as an option in the Nike App or on Nike.com youll need to use a compatible Apple device running the latest<br/>
             OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally youll need to use<br/> 
             Safari to use Apple Pay on Nike.com.</p>
        </div>

        <p className="mb-2 ml-10">Was this answer helpful?</p>
        <div className="flex space-x-1 ml-10 text-black">
            <ThumbsUp/><ThumbsDown/>
        </div>

        <h2 className="ml-10 text-[12px] text-med mt-2 mb-5">RELATED</h2>

        <h2 className="ml-20 text-[12px] text-side font-semibold mb-3">WHAT ARE NIKE DELIVERY OPTIONS?</h2>
        <h2 className="ml-20 text-[12px] text-side font-semibold mb-3">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h2>
        </div>


        </main>
    )
}


