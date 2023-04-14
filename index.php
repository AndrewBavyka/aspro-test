<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Allcorp</title>
    <link rel="stylesheet" href="style/style.css">
</head>

<body>
    <div class="wrapper">
        <!-- <?php require_once __DIR__ . '/components/header/header.php' ?> -->
        <main>
            <?php require_once __DIR__ . '/components/advanatages/advanatages.php'; ?>
            <?php require_once __DIR__ . '/components/news/news.php'; ?>
            <?php require_once __DIR__ . '/components/about/about.php' ?>
            <?php require_once __DIR__ . '/components/form/form.php'; ?>
            <?php require_once __DIR__ . '/components/product/product.php'; ?>
        </main>
    </div>

    <?php require_once __DIR__ . '/components/footer/footer.php'; ?>
    <script src="js/script.js"></script>
</body>

</html>