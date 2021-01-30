<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PagesController extends AbstractController
{

    /**
     * @Route("/", name="app_index")
     */
    public function index():Response
    {
        return $this->render('pages/index.html.twig', []);
    }

    /**
     * @Route("/oAuth", name="app_oAuth")
     */
    public function oAuth():Response
    {
        //echo "1",2+5, "pro".
        //"end";

        $client = new \Google\Client();
        $path = $this->getParameter('kernel.project_dir');

        $client->setAuthConfig($path.'/'.'credentials.json');
        $client->setScopes(['https://www.googleapis.com/auth/books']);

        $service = new \Google_Service_Books($client);
        //dd($service->bookshelves_volumes);
        $q = 'php';
        $optParams = array(
            'maxResults' => 40,

        );
        $results = $service->volumes->listVolumes($q, $optParams);

        return $this->render('pages/o_auth.html.twig', [
            'books' => $results,
        ]);
    }

    /**
     * @Route("/homepage", name="app_homepage")
     */
    public function homepage(): Response
    {
        //return new Response("<p style=\"margin: 200px auto;text-align:center;color: #ff0000;font-size:16rem;
        //font-weight: bolder;\">404</p>");

        $menu['links'] = [
            'apn' => [
                'no' => '1',
                'title'=>'Prime Numbers'
            ]
        ];

        return $this->render('pages/homepage.html.twig', [
            'links' => $menu['links'],
        ]);
    }

    /**
     * @Route("/prime_numbers", name="app_prime_numbers")
     */
    public function equalizer():Response
    {
        return $this->render('pages/prime_numbers.html.twig', [

        ]);
    }
}
