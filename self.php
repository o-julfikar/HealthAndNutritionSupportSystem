<?php
    include_once "connect.php";

    $session_key = $_REQUEST["session_key"];

    $sql_get_uid = "SELECT user_id from session WHERE id = '$session_key';";
    $result_uid = mysqli_query($conn, $sql_get_uid);

    if (mysqli_num_rows($result_uid) > 0) {
        $row = mysqli_fetch_assoc($result_uid);
        $uid = $row["user_id"];

        $sql_get_info = "SELECT height, weight, birthdate, gender FROM user WHERE id = $uid;";
        $result_info = mysqli_query($conn, $sql_get_info);

        if (mysqli_num_rows($result_info)) {
            $info_row = mysqli_fetch_assoc($result_info);
            $height = $info_row["height"];
            $weight = $info_row["weight"];
            $birthdate = $info_row["birthdate"];
            $gender = $info_row["gender"];

            $today = (string) date("Y-m-d");
            $birthdate = strtotime($birthdate);
            $today = strtotime($today);

            $age = $today - $birthdate;
            $age = round($age / 60 / 60 / 24 / 365, 0);

            echo 'soul_success ' . $height . " " . $weight . " " . $age . " " . $gender;
        } else {
            echo 0;
        }
    } else {
        echo -1;
    }


