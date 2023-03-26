<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use GuzzleHttp\Client;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {


       





        // paruošiame nuotraukų folderį, parsisiunčiam foto ir persiduodam kaip kintamąjį į lentelę
        $client = new Client(['allow_redirects' => ['track_redirects' => true]]);
        $response  = $client->get('https://api.lorem.space/image/shoes?w=600&h=900');
        $headersRedirect = $response->getHeader(\GuzzleHttp\RedirectMiddleware::HISTORY_HEADER);
        $image_url = $headersRedirect[0];  //URL

        $url_pathinfo = pathinfo($image_url);  
        $image_name = $url_pathinfo['filename'].'.'.$url_pathinfo['extension']; //FILE NAME

        $photo_path = '/photos/'.$image_name;
        file_put_contents ($photo_path, file_get_contents($image_url));
       
       
        return [
            'name' => fake()->sentence(3),
            'description' => fake()->sentence(rand(25,50)),
            'sku' => fake()->ean13(),
            'photo' => $photo_path,
            'warehouse_qnt' => rand(0, 30),
            'price' => rand(0, 5000) . '.' . rand(10, 99)
        ];
    }
}
