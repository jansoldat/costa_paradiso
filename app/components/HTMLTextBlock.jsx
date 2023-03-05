
export const HTMLTextBlock = ({ translations }) => <div dangerouslySetInnerHTML={{ __html: translations?.[0]?.content }} />
