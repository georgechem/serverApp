<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    /**
     * @Route("/", name="app_homepage")
     */
    public function index(): Response
    {
        //return new Response("<p style=\"margin: 200px auto;text-align:center;color: #ff0000;font-size:16rem;
        //font-weight: bolder;\">404</p>");

        $menu['links'] = [
            'apn' => [
                'no' => 'No. 1',
                'title'=>'Prime Numbers'
            ]
        ];

        return $this->render('pages/index.html.twig', [
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
