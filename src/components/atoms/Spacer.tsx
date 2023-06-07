type Props = {
    size: string;
};

export const Spacer = ({ size }: Props) => {
    return <div style={{ width: "auto", height: size }}></div>;
};
