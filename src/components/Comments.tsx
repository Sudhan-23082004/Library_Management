import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className=" px-32 pb-24 bg-[#ffe8e8]">
    <Giscus
      id="comments"
      repo="Sudhan-23082004/Library_Management"
      repoId="R_kgDOLf637g"
      category="Announcements"
      categoryId="DIC_kwDOLf637s4Ceyne"
      mapping="https://sudhan.me/comments"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    /></div>
  );
}
