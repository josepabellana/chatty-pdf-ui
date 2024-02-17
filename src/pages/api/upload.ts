import type { APIRoute } from "astro";

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'josepabe', 
  api_key: '667314323111297', 
  api_secret: import.meta.env.CLOUDINARY_SECRET 
});


export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('file');

    console.log(file);


    //simulate delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return new Response("Hello worlds!");
}