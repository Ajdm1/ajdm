<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package ajdm
 */

get_header();

?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();                			
		endwhile; // End of the loop.
            
        
            
		?>
        <article>
            
       <?php
	       get_template_part( 'template-parts/content_stage', get_post_type() ); //Refère au template pour le stage individuel
	       the_post_navigation();

       ?>
            
        </article>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();


// API KEY : AIzaSyBe-Uxi2cqh3fOS8d9cJvRD_kGNKAw3pUw