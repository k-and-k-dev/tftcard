import { getNowDate } from "@/util/device";
import { S3Client, PutObjectCommandInput, PutObjectCommand } from "@aws-sdk/client-s3";

const REGION = process.env.NEXT_PUBLIC_AWS_REGION ?? "";
const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID ?? "";
const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ?? "";
const S3_BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME ?? "";

const s3Client = new S3Client({
    region: REGION,
    credentials: { accessKeyId: ACCESS_KEY_ID, secretAccessKey: SECRET_ACCESS_KEY },
});

export const uploadImage = async (blob: Blob | null): Promise<string> => {
    if (blob === null) return "";
    // const uuid = GetUUID();
    // console.log("uuid = ", uuid);
    const nowDate = getNowDate("");
    console.log(nowDate);
    const fileName = nowDate + ".png";
    const uploadParams: PutObjectCommandInput = { Bucket: S3_BUCKET_NAME, Key: fileName, Body: blob };
    const res = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log("s3 uploadImage:", res);
    return fileName;
};

export const GetS3Object = async () => {
    // const getObjectResult = await client.getObject({Bucket: "...", Key: "..."})
};

const GetUUID = (): string => {
    let uuid = "";
    let random;
    for (let i = 0; i < 32; i++) {
        random = (Math.random() * 16) | 0;
        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-";
        }
        uuid += (i == 12 ? 4 : i == 16 ? (random & 3) | 8 : random).toString(16);
    }
    return uuid;
};
