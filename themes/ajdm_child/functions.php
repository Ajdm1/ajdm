<?php
function my_theme_enqueue_styles() {

    $parent_style = 'ajdm-style'; 


    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'ajdm-enfant-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

// Google map API

function my_theme_add_scripts() {
 wp_enqueue_script( 'google-map', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBe-Uxi2cqh3fOS8d9cJvRD_kGNKAw3pUw', array(), '3', true );
 wp_enqueue_script( 'google-map-init', get_template_directory_uri() . '/library/js/google-maps.js', array('google-map', 'jquery'), '0.1', true );
}
 
add_action( 'wp_enqueue_scripts', 'my_theme_add_scripts' );
 

function my_acf_google_map_api( $api ){
	
	$api['key'] = 'AIzaSyBe-Uxi2cqh3fOS8d9cJvRD_kGNKAw3pUw';
	
	return $api;
	
}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');

add_filter('pre_get_posts', 'limite_posts');
function limite_posts($query){
    if ($query->is_category) {
        $query->set('posts_per_page', 5);
    }
    return $query;
}

?>