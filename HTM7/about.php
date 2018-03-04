<!DOCTYPE html>
<?php
//Step1
 $db = mysqli_connect('localhost','root','Dunnellon22','pokemon_informaiton')
 or die('Error connecting to MySQL server.');
?>
<html lang="en">
  <head>
    <!-- 01. Meta Tags -->
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta name="keywords" content="html, table, sortable"/>
    <meta name="description" content="An open-source collection of research for the enrichment of thought, organization of ideas, and recording of progress."/>
    <meta name="author" content="Kevin Hitt"/>
    <link rel="author" href="https://plus.google.com/u/0/103231175529072372519"/>
    <meta name="keywords" content="research, open knowledge, environmental, explicit knowledge, information, sustainability, open content, redistribute, informal network, repository, dissemination"/>
    <meta name="robots" content="index, follow"/>
    <meta name="revisit-after" content="7 days"/>

    <title>kevinh.work | About</title>

    <!-- Media Share Tages -->
    <meta property="og:title" content="Open Research and Data"/>
    <meta property="og:type" content="blog"/>
    <meta property="og:image" content="https://github.com/repneuable/water/blob/master/resources/icons/background3.jpg"/>
    <meta property="og:url" content="https://kevinh.work"/>
    <meta property="og:description" content="Explore these sortable tables and stay for a while. Please submit a comment, question, or suggestion at kevinh.work/HTM7/comments.html"/>
    <meta property="fb:admins" content="100000138827986"/>
    <meta name="twitter:url" content="https://kevinh.work"/>
    <meta name="twitter:title" content="A collection of sortable tables. Topic subpage of kevinh.work"/>
    <meta name="twitter:description" content="An open-source collection of research for the enrichment of thought, organization of ideas, and recording of progress. Submit a suggestion!"/>
    <meta name="twitter:image" content="https://github.com/repneuable/water/blob/master/resources/icons/background3.jpg"/>

    <!-- 03. Favicon -->
    <link rel="shortcut icon" href="../favicon.ico">

    <!-- 04. Cascading Style Sheets -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="../C55/home.css">
    <link type="text/css" rel="stylesheet" href="../C55/website.css">

    <!-- 05. Javascript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../J5/home.js"></script>

    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109143936-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-109143936-1');
    </script>

    <!--HEADER-->
    <div id="header" class="headerSUB">
      <table width ="100%" style="margin: 0px;">
        <tbody>
          <tr>
            <td>
              <a href="home.html"><img title="Home" alt="Home" src="../resources/icons/home-icon.svg" width="10" height="10" />  kevinh.work</a>
              <a href="https://keybase.io/repneuable" target="_blank"><img title="Keybase" alt="Keybase" src="../resources/icons/keybase-icon.png" width="15" height="15" /></a>
            </td>
            <td>
              <a href="topics/calm.html" ><img title="calm" alt="calm" src="../resources/icons/calm.png" class="headerPATHICONS"/></a>
              <a href="topics/water.html" ><img title="water" alt="water" src="../resources/icons/water.png" class="headerPATHICONS"/></a>
              <a href="topics/eco.html" ><img title="eco" alt="eco" src="../resources/icons/eco.png" class="headerPATHICONS"/></a>
              <a href="topics/action.html" ><img title="action" alt="action" src="../resources/icons/action.png" class="headerPATHICONS"/></a>
              <a href="topics/gen.html" ><img title="general" alt="general" src="../resources/icons/gen.png" class="headerPATHICONS"/></a>
              <form method="post" name="searcherFORM" onsubmit="searchPage(document.getElementById('incomingSTRING').value); return false;">
                <input type="text" class="localSEARCHbar" id="incomingSTRING" name="incomingSTRING"/>
                <input type="submit" value="&#9906;" class="localSEARCHbutton"/>
              </form>
              <a href="../index.html" ><img title="index" alt="index" src="../resources/icons/tree-icon.png" class="headerPATHICONS"/></a>
              <img title="Source Code" alt="Source Code" src="../resources/icons/source-icon.png" width="15" height="15" onclick="viewSource()"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </head>

  <body>
    <div id="section" class="sectionSUB">
      <div style="padding-left: 5%;" class="draggableALTContainer"></div>
      <div id="container" class="container" >





        <?php
        //Step2
        $query = "SELECT * FROM pokemon_informaiton";
        mysqli_query($db, $query) or die('Error querying database.');

        //Step3
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_array($result);

        while ($row = mysqli_fetch_array($result)) {
         echo $row['first_name'] . ' ' . $row['last_name'] . ': ' . $row['email'] . ' ' . $row['city'] .'<br />';
        }
        //Step 4
        mysqli_close($db);
        ?>




        <p class="articleENTRYhead">
          A Title for an Article
        </p>
        <p class="articleENTRYmeta">
          28 January 2018 | By Kevin Hitt
        </p>
        <div class="articleENTRYbox">
          <p class="articleENTRY">
            <span class="articleENTRYcaps">J</span>ust pretend you are a whisper floating across a mountain.<br/>
            Little trees and bushes grow however makes them happy.<br/>
            See how easy it is to create a little tree right in your world.<br/>
            Nature is so fantastic, enjoy it. Let it make you happy.<br/>
            It's a super day, so why not make a beautiful sky? You can do it.<br/>
            <span class="articleENTRYindent">T</span>he only prerequisite is that it makes you happy. If it makes you happy then it's good.<br/>
            In your world you have total and absolute power. Isn't that fantastic that you can create an almighty tree that fast?<br/>
            This is gonna be a happy little seascape.<br/>
            I started painting as a hobby when I was little. I didn't know I had any talent.<br/>
            I believe talent is just a pursued interest. Anybody can do what I do. That's a crooked tree. We'll send him to Washington.<br/>
            Everybody's different. Trees are different. Let them all be individuals.<br/>
            Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning.<br/>
            We wash our brush with odorless thinner. Let your imagination be your guide.<br/>
            And I will hypnotize that just a little bit. Use what you see, don't plan it. Use your imagination, let it go.<br/>
            Van Dyke Brown is a very nice brown, it's almost like a chocolate brown.<br/>
            Even the worst thing we can do here is good. In painting, you have unlimited power. You have the ability to move mountains.<br/>
            You can bend rivers. But when I get home, the only thing I have power over is the garbage. We don't need any guidelines or formats.<br/>
            All we need to do is just let it flow right out of us. Now it's beginning to make a little sense.<br/>
            Everyone wants to enjoy the good parts - but you have to build the framework first. You better get your coat out, this is going to be a cold painting.<br/>
            You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush. We have a fantastic little sky!<br/>
            We don't really know where this goes - and I'm not sure we really care. It's hard to see things when you're too close.<br/>
            Take a step back and look. Get away from those little Christmas tree things we used to make in school. The least little bit can do so much.<br/>
            Try a more powerful colour could you solutionize that for me, so I want you to take it to the next level, or can we have another option.<br/>
            Do less with more can you make it look like this clipart i found. I'll pay you in a week we don't need to pay upfront i hope you understand theres all this spanish text on my site can you make pink a little more pinkish. Start on it today and we will talk about what i want next time we are your relatives I like it, but can the snow look a little warmer, that sandwich needs to be more playful, so start on it today and we will talk about what i want next time I know somebody who can do this for a reasonable cost. We need more images of groups of people having non-specific types of fun can it be more retro. The target audience is makes and famles aged zero and up I like it, but can the snow look a little warmer, and we are a big name to have in your portfolio. You are lucky to even be doing this for us give us a complimentary logo along with the website, or I like it, but can the snow look a little warmer, for i was wondering if my cat could be placed over the logo in the flyer for can you make it more infographic-y, you can get my logo from facebook. Just do what you think. I trust you I think we need to start from scratch, or this was not according to brief we have big contacts we will promote you, and other agencies charge much lesser, nor I like it, but can the snow look a little warmer, it's great, can you add a beard though . Can we have another option thanks for taking the time to make the website, but i already made it in wix, remember, everything is the same or better can you lower the price for the website? make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch so it looks a bit empty, try to make everything bigger, nor I know somebody who can do this for a reasonable cost, nor will royalties in the company do instead of cash. Can you lower the price for the website? make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch can you make it pop, so can you make it more infographic-y, this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue, and we need more images of groups of people having non-specific types of fun, so can you make it stand out more?.

          </p>
        </div>

        <div class="PDFpreviewBox"><object class="PDFpreview" data="../resources/journal_entries.txt"></object></div>

        <div id="footer" class="header">
          <table>
            <tr>
              <td style="width:50%;">
                <a href="https://www.twitter.com/repneuable" target="_blank"><img title="Twitter" alt="Twitter" src="../resources/icons/twitter-icon.png" width="15" height="15" /></a>
                <a href="https://www.instagram.com/khitt7/" target="_blank"><img title="Instagram" alt="Instagram" src="../resources/icons/instagram-icon.png" width="15" height="15" /></a>
                <a href="https://www.facebook.com/kevin.hitt.98" target="_blank"><img title="Facebook" alt="Facebook" src="../resources/icons/facebook-icon.png" width="15" height="15" /></a>
                <a href="https://www.linkedin.com/in/kevin-hitt-7aa93ab8/" target="_blank"><img title="LinkedIn" alt="LinkedIn" src="../resources/icons/linkedin-icon.png" width="15" height="15" /></a>
                <a href="https://www.reddit.com/user/hittww/" target="_blank"><img title="Reddit" alt="Reddit" src="../resources/icons/reddit-icon.png" width="15" height="15" /></a>
                <a href="https://www.soundcloud.com/repneuable" target="_blank"><img title="Soundcloud" alt="Soundcloud" src="../resources/icons/soundcloud-icon.png" width="15" height="15"/></a>
                <a href="https://github.com/repneuable/water/blob/master/HTM7/about.html" target="_blank"><img title="GitHub" alt="GitHub" src="../resources/icons/github-icon.png" width="15" height="15" /></a>
              </td>
              <td>
                <div style="float:left; margin-left: 10px;">
                  <a href="comments.html"><img title="Comments" alt="Comments" src="../resources/icons/comment-icon.png" width="17" height="17" /></a>
                  <a href="resume.html"><img title="Resume" alt="Resume" src="../resources/icons/resume-icon.png" width="17" height="17" /></a>
                  <a href="file_listing.html"><img title="Files" alt="Files" src="../resources/icons/file-icon.png" width="17" height="17" /></a>
                  <a href="../index.html"><img title="Site Index" alt="Site Index" src="../resources/icons/tree-icon.png" width="17" height="17" /></a>
                </div>
                <div style="float:right; margin-right: 10px;" id="expandFOOTER">
                  <a><img onclick="expandFOOTER()" src="../resources/icons/expand-icon.png" width="20" height="20" id="expandICON"/></a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div> <!--close container-->
    </div> <!--close section-->
  </body>
</html>
