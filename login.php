<?php

    include_once "connect.php";

    $email = $_REQUEST["email"];
    $password = $_REQUEST["password"];

    $sql_get_uid = "SELECT id FROM user WHERE email = '$email' AND password = '$password';";
    $result_uid = mysqli_query($conn, $sql_get_uid);

    if (mysqli_num_rows($result_uid) > 0) {
        $row = mysqli_fetch_assoc($result_uid);
        $uid = $row['id'];
    } else {
        echo 0;
        return;
    }

    function generateSessionKey() {
        $key = "";
        for ($i = 0; $i < 64; $i += 1) {
            $numeric = rand(0, 1);
            $alpha = "abcdefghijklmnopqrstuvwxyz";
            if ($numeric) {
                $key .= rand(0, 9);
            } else {
                $key .= $alpha[rand(0, strlen($alpha) - 1)];
            }
        }

        return $key;
    }

    $session_id = generateSessionKey();
    $sql_get_session = "SELECT * FROM session WHERE id = '$session_id';";
    $result_session = mysqli_query($conn, $sql_get_session);

    while (mysqli_num_rows($result_session)) {
        $session_id = generateSessionKey();
        $result_session = mysqli_query($conn, $sql_get_session);
    }

    $date = date("Y/m/d");

    $sql_insert_session =
        "INSERT INTO session (id, user_id, date_created) " .
        "VALUES ('$session_id', '$uid', '$date');";

    mysqli_query($conn, $sql_insert_session);

    echo "soul_success " . $session_id;
