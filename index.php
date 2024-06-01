<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="assets/css/style.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

     <script src="https://code.jquery.com/jquery-3.6.0.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>

    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

    <script src="assets/js/main.js"></script>

    <style>
        .star {
            position: absolute;
            width: 100px;
            height: 5px;
            background-color: white;
            border-radius: 50%;
        }
    </style>

</head>
<body class="font-serif">
<div>
    <?php include_once "templates/header.php"; 

        include_once "templates/banner.php";

        include_once "templates/experience.php";

        include_once "templates/project.php";

        include_once "templates/contact.php";

        include_once "templates/footer.php"; 

    ?>
</div>

</body>
</html>