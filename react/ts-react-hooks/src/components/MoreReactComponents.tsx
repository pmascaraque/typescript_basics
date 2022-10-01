export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return (
    <h2>{title}</h2>
  )
}

function MoreReactComponents() {
  return (
    <Heading title="hello" />
  )
}

export default MoreReactComponents;