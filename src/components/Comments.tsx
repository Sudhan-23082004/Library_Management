import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className=" px-32 pb-24 bg-[#ffe8e8]">
    <Giscus
      id="comments"
      repo="Sudhan-23082004/library_comments"
      repoId="R_kgDOLeT4sQ"
      category="Announcements"
      categoryId="DIC_kwDOLeT4sc4Cd3UE"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    /></div>
  );
}