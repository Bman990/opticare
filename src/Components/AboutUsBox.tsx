import '/StyleSheet/Box.css'

interface AboutUsBoxProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    svg?: React.FC<any>
    heading: string;
    details: string;
}

export const AboutUsBox: React.FC<AboutUsBoxProps> = ({svg: SvgComponent, heading, details}) => {
    return (
        <div className="boxContainer">
            <div className="boxSvgDiv">
                {SvgComponent && <SvgComponent />}
            </div>

            <div className="boxHeadingDiv">
                <h2>{heading}</h2>
            </div>

            <div className="boxDetailsDiv">
                <p>{details}</p>
            </div>
        </div>
    )
}