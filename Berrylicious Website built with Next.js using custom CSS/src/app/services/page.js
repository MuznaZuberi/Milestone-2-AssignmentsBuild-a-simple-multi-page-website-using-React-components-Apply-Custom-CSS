import Image from "next/image";
export default function Our_Services() {
	return(

      <div>


         
         <h1>Berrylicious Offerings</h1>    
         <div className ="our_services">

         <div className="service_box">
         <Image 
         src = {require("/img/service_01.png")}
         alt = "fruit_image"
         />

         <h2>Orange Bliss</h2>
         <p>At Berrylicious, we are dedicated to providing the juiciest and highest-quality oranges, harvested fresh from top-notch orchards. Our oranges are loaded with Vitamin C and full of natural taste, ideal for a revitalizing snack or juicing.</p>
         </div>





         <div className="service_box">
         <Image 
         src = {require("/img/service_02.png")}
         alt = "fruit_image"
         />

        <h2>Grape Glow</h2>
         <p>At Berrylicious, our GrapeGlow offers an exquisite treat, providing the ideal blend of sweetness and juiciness with every mouthful. These top-quality grapes are meticulously chosen from the finest vineyards, guaranteeing bright colors, rich tastes, and a refreshing experience.</p>
        </div>





        <div className="service_box">
        <Image 
        src = {require("/img/service_03.png")}
        alt = "fruit_image"
        />

        <h2>Guava Bliss</h2>
         <p>At Berrylicious, our GuavaBliss delivers a burst of tropical flavor in every bite. These guavas, selected at their peak ripeness, are full of sweet, tangy delight and a pleasant fragrance. Loaded with Vitamin C, fiber, and antioxidants, GuavaBliss not only pleases your palate but also contributes to your wellness.</p>
         </div>



         </div>

         <div className = "service-btn">
         <a href = "/services"><b>Read More</b></a>
         </div>
         

      </div>

	)
}