<?php
/**
 * The template for displaying the homepage.
 * Includes multiple loops and a slideshow
 */
get_header(); ?>

<?php if ( have_posts() )
{
    while ( have_posts() )
    {
        the_post(); 
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
            <section class="entry-content full-width">
                <header class="entry-header">
                    <h1 class="entry-title accueil-title">Présentation</h1>
                </header>   
                <?php the_content(); ?>
            </section>
            
            <section class="front-page archives clear">
                <section class="division">
                    <h2>Derniers stages publiés</h2>
                        <!-- contenu -->
                        <ul class="updates">
                            <?php $query = new WP_Query( array(
                                'post_type' => 'post',
                                'category_name' => 'stages'
                                
                            ) );
                            while ($query->have_posts()) : $query->the_post(); ?>
                            <li class="home update"><a href="<?php the_permalink(); ?>"><?php the_title(); ?> - <?php the_date( 'j F' ); ?></a></li>
                            <?php   endwhile; ?>
                        </ul>
                </section>
                
                 <section class="division">
                    <h2>Nos Partenaires</h2>
                        <!-- contenu -->
                        <p>À venir</p>
                        <ul class="updates">
                        
                        </ul>
                </section>
            </section>
            
           
        </article> 
    <?php
    }
}
?>


<?php get_footer(); ?>