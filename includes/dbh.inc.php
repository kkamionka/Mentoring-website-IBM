<?php
try {
  $pdo = new PDO('sqlite:/Users/konradgurbiel/Documents/GitHub/php-template/db.db');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}
