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

			the_post_navigation();
                			
		endwhile; // End of the loop.
            
        
            
		?>
        <article>
            
        <p><?php the_field('description'); ?></p>
        <p><?php the_field('superviseur'); ?></p>
        <p><?php the_field('langages'); ?></p>
        <p><?php the_field('type'); ?></p>
        <p><?php the_field('carte'); ?></p>
            
        </article>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();


// API KEY : AIzaSyBe-Uxi2cqh3fOS8d9cJvRD_kGNKAw3pUw