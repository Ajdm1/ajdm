window.captainform_is_widget_page=true;jQuery(document).ready(function(a){captainform_bind_widget()});function captainform_bind_widget(b){var a="";if(typeof b!="undefined"&&b!=""&&b!=null){a="#"+b+" "}bind_searchable(a);bind_lightbox_publish(a);if(typeof jscolor!="undefined"){jscolor.init()}}function bind_lightbox_publish(a){jQuery(a+".cf_lightbox_cotainer").each(function(){if(jQuery(this).find(".cf_display_as_lightbox").is(":checked")){jQuery(this).find(".cf_triggers_container").show();if(jQuery(this).find(".cf_trigger:checked").val()==1){image_obj=jQuery(this).find(".cf_trigger_1_url");captainform_test_valid_image(image_obj.val(),image_obj)}}else{if(!jQuery(this).find(".cf_display_as_lightbox").is(":checked")){jQuery(this).find(".cf_triggers_container").hide()}}});jQuery(a+".cf_display_as_lightbox").on("click",function(){if(jQuery(this).is(":checked")){jQuery(this).closest(".cf_lightbox_cotainer").find(".cf_triggers_container").show()}else{jQuery(this).closest(".cf_lightbox_cotainer").find(".cf_triggers_container").hide()}});jQuery(a+".cf_trigger").on("click",function(){var c=jQuery(this).val();var b=jQuery(this).closest(".cf_triggers_container");jQuery(b).find(".cf_trigger_selected_option_container").hide();jQuery(b).find(".cf_trigger_selected_option_cotainter_"+c).show()});jQuery(a+".cf_trigger").each(function(){var c=jQuery(this).val();if(jQuery(this).is(":checked")){var b=jQuery(this).closest(".cf_triggers_container");jQuery(b).find(".cf_trigger_selected_option_container").hide();jQuery(b).find(".cf_trigger_selected_option_cotainter_"+c).show()}});jQuery(a+".cf_display_as_lightbox").on("change",function(){if(!jQuery(this).is(":checked")){var c=jQuery(this).closest(".captainform_widget_container").find(".captainform_widget_select").val();var b='[captainform id="'+c+'"]';jQuery(this).closest(".captainform_widget_container").find(".cf_generated_code").val(b)}});jQuery(a+".cf_trigger_1_url").on("change keyup",function(){captainform_test_valid_image(jQuery(this).val(),jQuery(this))});jQuery(a+".cf_triggers_container input , "+a+" .cf_display_as_lightbox,"+a+" .captainform_widget_select,"+a+" .captainform_form_toembed").on("change keyup",function(){if(window.captainform_is_widget_page==true){var j=jQuery(this).closest(".captainform_widget_container").find(".captainform_widget_select").val()}else{var j=document.getElementById("captainform_form_toembed").options[document.getElementById("captainform_form_toembed").selectedIndex].value}var i=jQuery(this).closest(".captainform_widget_container").find(".cf_display_as_lightbox").is(":checked");var c='[captainform id="'+j+'"';if(i==true){c+=' lightbox="1" ';var k=jQuery(this).closest(".captainform_widget_container").find(".cf_trigger:checked").val();switch(k){case"0":var e=jQuery(this).closest(".captainform_widget_container").find(".cf_trigger_0_text").val();c+='text_content="'+encodeURIComponent(e)+'" type="text"';break;case"1":var m=jQuery(this).closest(".captainform_widget_container").find(".cf_trigger_1_url");var h=m.val();c+='url="'+encodeURI(h)+'" type="image"';break;case"2":var l=jQuery(this).closest(".captainform_widget_container").find(".cf_trigger_2_text").val();var f=jQuery(this).closest(".captainform_widget_container").find(".cf_trigger_2_position:checked").val();var g=jQuery(this).closest(".captainform_widget_container").find(".cf_trigger_2_background_color").val();var d=jQuery(this).closest(".captainform_widget_container").find(".cf_trigger_2_color").val();c+='text_content="'+encodeURIComponent(l)+'" ';c+='bg_color="'+g+'" ';c+='text_color="'+d+'" ';switch(f){case"1":c+='position="left" ';break;case"2":c+='position="right" ';break;case"3":c+='position="bottom" ';break;default:c+='position="left" '}c+='type="floating-button"';break;case"3":var b=jQuery(this).closest(".captainform_widget_container").find(".cf_trigger_2_time").val()*1000;if(b<=0){b=3000}if(b!=""){c+='miliseconds="'+b+'" '}else{c+='miliseconds="'+3000+'" '}c+='type="auto-popup"';break}}c+="]";if(window.captainform_is_widget_page==true){jQuery(this).closest(".captainform_widget_container").find(".cf_generated_code").val(c)}else{jQuery(".cf_generated_code").val(c)}})}function bind_searchable(b){try{jQuery(b+".captainform_widget_select").chosen({search_contains:true,no_results_text:"No results match"});jQuery(b+".captainform_widget_container").find(".chosen-container.chosen-container-single").each(function(){if(jQuery(this).parent().find(".chosen-container.chosen-container-single").length>1){jQuery(this).parent().find(".chosen-container.chosen-container-single").last().remove()}})}catch(a){}}jQuery(document).ajaxComplete(function(b,l,d){var e={},c,f,k,h;if(typeof d.data!="undefined"){c=d.data.split("&");for(f in c){k=c[f].split("=");e[decodeURIComponent(k[0])]=decodeURIComponent(k[1])}}if((e.action&&(e.action==="save-widget")&&(typeof e["widget-id"]!="undefined")&&(e["widget-id"].indexOf("captainformwidget")!=-1))||(typeof e.wp_customize!="undefined"&&e.wp_customize=="on")){var a=e["widget-id"];var j=null;var g=false;if(typeof e.wp_customize!="undefined"&&e.wp_customize=="on"){g=true}else{jQuery(".widget").each(function(){if(jQuery(this).attr("id").match(new RegExp(a))){j=jQuery(this).attr("id")}});if(j!=null){g=true}}if(g==true){captainform_bind_widget(j)}}});function captainform_test_valid_image(d,c,e){e=e||5000;var a=false,f;var b=new Image();b.onerror=b.onabort=function(){if(!a){clearTimeout(f);jQuery(c).addClass("cf_red_border")}};b.onload=function(){if(!a){clearTimeout(f);jQuery(c).removeClass("cf_red_border")}};b.src=d;f=setTimeout(function(){a=true;jQuery(c).addClass("cf_red_border")},e)};