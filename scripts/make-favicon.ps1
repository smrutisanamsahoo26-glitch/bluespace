Add-Type -AssemblyName System.Drawing

$size = 96
$bitmap = New-Object System.Drawing.Bitmap $size, $size
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.Clear([System.Drawing.Color]::FromArgb(255, 10, 42, 108))

$pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 27, 74, 200), 6)
$graphics.DrawEllipse($pen, 10, 10, $size - 20, $size - 20)

$font = New-Object System.Drawing.Font("Segoe UI", 42, [System.Drawing.FontStyle]::Bold)
$brush = [System.Drawing.Brushes]::White
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center
$graphics.DrawString("B", $font, $brush, (New-Object System.Drawing.RectangleF 0,0,$size,$size), $format)

$hIcon = $bitmap.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)
$outputPath = Join-Path $PSScriptRoot "..\\src\\app\\favicon.ico"
$fs = New-Object System.IO.FileStream($outputPath, [System.IO.FileMode]::Create)
$icon.Save($fs)
$fs.Close()

$graphics.Dispose()
$bitmap.Dispose()

