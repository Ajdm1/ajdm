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
        <article class="article_single">
            
       <?php
	       get_template_part( 'template-parts/content_stage', get_post_type() ); //Refère au template pour le stage individuel
	    ?>
	    <div class="nav_single">
		    <p><?php previous_post('%', '', 'yes'); ?></p> <!--//Ajout des posts precedents et suivants sans la mention "previous post"-->
		    <p><?php next_post('%', '', 'yes'); ?></p>
		</div>
       
            
        </article>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();


// API KEY : AIzaSyBe-Uxi2cqh3fOS8d9cJvRD_kGNKAw3pUw