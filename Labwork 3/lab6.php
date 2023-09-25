<html>
<body>
<h1>Sorted Array</h1>
<?php
function sortNumericArray($array) {
    sort($array);
    return $array;
}

// Example usage:
$myArray = [5, 2, 9, 1, 12];
$sortedArray = sortNumericArray($myArray);

// Print the sorted array
echo "Original Array: ";
// USING print_r return Array ( [0] => 1 [1] => 2 [2] => 5 [3] => 9 => 12 [4] )
echo implode(", ", $myArray);
echo "<br>";

echo "Sorted Array: ";
//print_r($sortedArray);
echo implode(", ", $sortedArray);
?>
</body>
</html>