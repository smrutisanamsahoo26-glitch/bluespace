Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bitmap = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$rect = New-Object System.Drawing.Rectangle 0, 0, $width, $height
$gradient = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    [System.Drawing.Color]::FromArgb(255, 10, 42, 108),
    [System.Drawing.Color]::FromArgb(255, 3, 8, 23),
    35
)
$graphics.FillRectangle($gradient, $rect)

$titleFont = New-Object System.Drawing.Font("Segoe UI", 56, [System.Drawing.FontStyle]::Bold)
$subtitleFont = New-Object System.Drawing.Font("Segoe UI", 28, [System.Drawing.FontStyle]::Regular)
$white = [System.Drawing.Brushes]::White
$accent = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 135, 167, 255))

$graphics.DrawString("BlueSpace", $titleFont, $white, 80, 230)
$graphics.DrawString("Renovations | Hardware | Installation", $subtitleFont, $accent, 80, 320)

$outputPath = Join-Path $PSScriptRoot "..\\public\\og-image.png"
$bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bitmap.Dispose()

