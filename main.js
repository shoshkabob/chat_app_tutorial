$(document).ready(function() {

     $('#conc').hover(
         function () {
           $('#conc_list').css({"display":"block"});
         }, 
         function () {
           $('#conc_list').css({"display":"none"});
         }
     );
     $('#git').hover(
         function () {
           $('#git_list').css({"display":"block"});
         }, 
         function () {
           $('#git_list').css({"display":"none"});
         }
     );
     $('#chat_s').hover(
         function () {
           $('#chat_s_list').css({"display":"block"});
         }, 
         function () {
           $('#chat_s_list').css({"display":"none"});
         }
     );
     $('#chat_c').hover(
         function () {
           $('#chat_c_list').css({"display":"block"});
         }, 
         function () {
           $('#chat_c_list').css({"display":"none"});
         }
     );
     $('#test').hover(
         function () {
           $('#test_list').css({"display":"block"});
         }, 
         function () {
           $('#test_list').css({"display":"none"});
         }
     );
     $('#host').hover(
         function () {
           $('#host_list').css({"display":"block"});
         }, 
         function () {
           $('#host_list').css({"display":"none"});
         }
     );

});