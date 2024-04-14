
export const GenerateCard = (
    color,
    logo,
    logoSize,
    backgroundImage,
    visaBrand,
) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const canvasWidth = 1536; // Landscape width
    const canvasHeight = 969; // Landscape height
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const drawLogo = (ctx, canvas) => {
        if (logo) {
            const img = new Image();
            img.onload = () => {
                const width = logoSize;
                const height = logoSize * (img.height / img.width);
                ctx.drawImage(img, 56, 56, width, height);
                drawVisaBrand(ctx, canvas, visaBrand);
            };
            img.src = logo;
        } else {
            drawVisaBrand(ctx, canvas, visaBrand);
        }
    };

    const drawVisaBrand = (ctx, canvas, visaBrand) => {
        if (visaBrand) {
            const img = new Image();
            img.onload = () => {
                const marginBottom = 56;
                const marginRight = 56;
                const x = canvas.width - img.width - marginRight; // Use img.width instead of brandWidth
                const y = canvas.height - img.height - marginBottom;
    
                ctx.drawImage(img, x, y); // Remove brandWidth parameter
                finishDownload();
            };
            img.src = visaBrand;
        } else {
            finishDownload();
        }
    };
    

    const finishDownload = () => {
        console.log("finishDownload");
        const link = document.createElement("a");
        link.download = "ReapCard.png";
        link.href = canvas.toDataURL();
        console.log(link.href)
        link.click();
    };

    // Draw background color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw background image if selected
    if (backgroundImage) {
        const bgImg = new Image();
        bgImg.onload = () => {
            const aspectRatio = bgImg.width / bgImg.height;
            let drawWidth = canvasWidth;
            let drawHeight = drawWidth / aspectRatio;

            if (drawHeight < canvasHeight) {
                drawHeight = canvasHeight;
                drawWidth = drawHeight * aspectRatio;
            }

            const drawX = (canvasWidth - drawWidth) / 2;
            const drawY = (canvasHeight - drawHeight) / 2;

            ctx.drawImage(bgImg, drawX, drawY, drawWidth, drawHeight);
            drawLogo(ctx, canvas);
        };
        bgImg.src = backgroundImage;
    } else {
        drawLogo(ctx, canvas);
    }
};
