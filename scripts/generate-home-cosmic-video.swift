import AVFoundation
import CoreGraphics
import CoreVideo
import Foundation

let width = 1280
let height = 720
let fps: Int32 = 24
let seconds = 8
let outputURL = URL(fileURLWithPath: CommandLine.arguments.dropFirst().first ?? "public/videos/home-cosmic-hero.mp4")

let writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
let settings: [String: Any] = [
    AVVideoCodecKey: AVVideoCodecType.h264,
    AVVideoWidthKey: width,
    AVVideoHeightKey: height,
    AVVideoCompressionPropertiesKey: [
        AVVideoAverageBitRateKey: 3_000_000,
        AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
        AVVideoMaxKeyFrameIntervalKey: fps * 2,
    ],
]
let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
input.expectsMediaDataInRealTime = false
let adaptor = AVAssetWriterInputPixelBufferAdaptor(
    assetWriterInput: input,
    sourcePixelBufferAttributes: [
        kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
        kCVPixelBufferWidthKey as String: width,
        kCVPixelBufferHeightKey as String: height,
    ]
)
writer.add(input)
writer.startWriting()
writer.startSession(atSourceTime: .zero)

let colorSpace = CGColorSpaceCreateDeviceRGB()
let brass = CGColor(red: 0.72, green: 0.61, blue: 0.40, alpha: 1)
let ivory = CGColor(red: 0.90, green: 0.87, blue: 0.79, alpha: 1)

func starValue(_ index: Int, _ channel: Int) -> CGFloat {
    let value = sin(Double(index * 97 + channel * 31) * 12.9898) * 43758.5453
    return CGFloat(value - floor(value))
}

func drawFrame(_ context: CGContext, time: CGFloat) {
    context.saveGState()
    context.translateBy(x: 0, y: CGFloat(height))
    context.scaleBy(x: 1, y: -1)
    context.setBlendMode(.normal)
    let bg = CGGradient(colorsSpace: colorSpace, colors: [
        CGColor(red: 0.015, green: 0.018, blue: 0.024, alpha: 1),
        CGColor(red: 0.025, green: 0.040, blue: 0.065, alpha: 1),
        CGColor(red: 0.012, green: 0.014, blue: 0.020, alpha: 1),
    ] as CFArray, locations: [0, 0.54, 1])!
    context.drawLinearGradient(bg, start: CGPoint(x: 0, y: 0), end: CGPoint(x: width, y: height), options: [])

    // A restrained star field, concentrated away from the copy area.
    for i in 0..<72 {
        let x = 540 + starValue(i, 0) * 700
        let y = 28 + starValue(i, 1) * 650
        let radius = 0.35 + starValue(i, 2) * 1.35
        let pulse = 0.24 + 0.38 * (0.5 + 0.5 * sin(time * (0.7 + starValue(i, 3) * 1.4) + starValue(i, 4) * 12))
        context.setFillColor(CGColor(red: 0.86, green: 0.82, blue: 0.70, alpha: pulse))
        context.fillEllipse(in: CGRect(x: x, y: y, width: radius, height: radius))
    }

    // Fine temporal grid and measured horizontal traces.
    context.setLineWidth(0.6)
    context.setStrokeColor(CGColor(red: 0.62, green: 0.58, blue: 0.47, alpha: 0.10))
    for y in stride(from: 84, through: 660, by: 72) {
        let yPosition = CGFloat(y)
        let drift = sin(time * 0.18 + yPosition) * 2
        context.move(to: CGPoint(x: 32, y: yPosition))
        context.addLine(to: CGPoint(x: 1248, y: yPosition + drift))
        context.strokePath()
    }

    let center = CGPoint(x: 962, y: 356)
    context.saveGState()
    context.translateBy(x: center.x, y: center.y)
    context.rotate(by: -0.17 + sin(time * 0.16) * 0.025)
    for index in 0..<7 {
        let width = 210 + CGFloat(index) * 58 + sin(time * 0.42 + CGFloat(index)) * 5
        let height = 74 + CGFloat(index) * 24
        context.setLineWidth(index == 3 ? 1.35 : 0.7)
        let lineColor = index == 3 ? brass : ivory
        let lineAlpha: CGFloat = index == 3 ? 0.66 : 0.18
        context.setStrokeColor(lineColor.copy(alpha: lineAlpha) ?? lineColor)
        context.strokeEllipse(in: CGRect(x: -width / 2, y: -height / 2, width: width, height: height))
    }
    context.restoreGState()

    // The figure is an abstract witness, deliberately quiet and anonymous.
    let breathe = sin(time * 0.72) * 3
    let figureX: CGFloat = 930
    let headRect = CGRect(x: figureX - 42, y: 186 + breathe, width: 84, height: 112)
    context.setFillColor(CGColor(red: 0.015, green: 0.020, blue: 0.030, alpha: 0.96))
    context.fillEllipse(in: headRect)

    let shoulders = CGMutablePath()
    shoulders.move(to: CGPoint(x: figureX - 42, y: 282 + breathe))
    shoulders.addCurve(to: CGPoint(x: figureX - 222, y: 666), control1: CGPoint(x: figureX - 100, y: 332), control2: CGPoint(x: figureX - 190, y: 530))
    shoulders.addLine(to: CGPoint(x: figureX + 190, y: 666))
    shoulders.addCurve(to: CGPoint(x: figureX + 42, y: 282 + breathe), control1: CGPoint(x: figureX + 160, y: 520), control2: CGPoint(x: figureX + 100, y: 332))
    shoulders.closeSubpath()
    context.addPath(shoulders)
    context.setFillColor(CGColor(red: 0.018, green: 0.024, blue: 0.038, alpha: 0.98))
    context.fillPath()
    context.setLineWidth(1)
    context.setStrokeColor(CGColor(red: 0.72, green: 0.61, blue: 0.40, alpha: 0.26))
    context.addPath(shoulders)
    context.strokePath()

    // Threads suggest signal crossing rather than a literal portal.
    context.setLineWidth(1.15)
    for i in 0..<9 {
        let path = CGMutablePath()
        let offset = CGFloat(i - 4) * 8
        path.move(to: CGPoint(x: figureX + offset, y: 244 + breathe))
        path.addCurve(
            to: CGPoint(x: 608, y: 174 + CGFloat(i) * 22),
            control1: CGPoint(x: figureX - 100, y: 170 + CGFloat(i) * 3),
            control2: CGPoint(x: 760, y: 210 + CGFloat(i) * 18)
        )
        context.addPath(path)
        context.setStrokeColor(CGColor(red: 0.78, green: 0.69, blue: 0.50, alpha: 0.10 + CGFloat(i == 4 ? 0.18 : 0)))
        context.strokePath()
    }

    // Small aperture glow, kept soft and localized.
    let glow = CGGradient(colorsSpace: colorSpace, colors: [
        CGColor(red: 0.74, green: 0.62, blue: 0.40, alpha: 0.18),
        CGColor(red: 0.74, green: 0.62, blue: 0.40, alpha: 0),
    ] as CFArray, locations: [0, 1])!
    context.drawRadialGradient(glow, startCenter: center, startRadius: 8, endCenter: center, endRadius: 210, options: [])

    context.restoreGState()
}

for frame in 0..<(seconds * Int(fps)) {
    while !input.isReadyForMoreMediaData {
        Thread.sleep(forTimeInterval: 0.002)
    }
    guard let pool = adaptor.pixelBufferPool else { break }
    var pixelBuffer: CVPixelBuffer?
    CVPixelBufferPoolCreatePixelBuffer(nil, pool, &pixelBuffer)
    guard let buffer = pixelBuffer else { continue }
    CVPixelBufferLockBaseAddress(buffer, [])
    let context = CGContext(
        data: CVPixelBufferGetBaseAddress(buffer),
        width: width,
        height: height,
        bitsPerComponent: 8,
        bytesPerRow: CVPixelBufferGetBytesPerRow(buffer),
        space: colorSpace,
        bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue
    )!
    drawFrame(context, time: CGFloat(frame) / CGFloat(fps))
    CVPixelBufferUnlockBaseAddress(buffer, [])
    let presentationTime = CMTime(value: CMTimeValue(frame), timescale: fps)
    adaptor.append(buffer, withPresentationTime: presentationTime)
}

input.markAsFinished()
let finished = DispatchSemaphore(value: 0)
writer.finishWriting {
    if writer.status == .completed {
        print("Generated \(outputURL.path)")
    } else {
        fputs("Video generation failed: \(writer.error?.localizedDescription ?? "unknown error")\n", stderr)
    }
    finished.signal()
}
finished.wait()
if writer.status != .completed {
    exit(1)
}
