<template>
  <div>
    <ContentDoc path="/about" />
    <section class="mt-4 flex flex-col gap-4">
      <div class=" text-center">
        .
      </div>
      <div>
        <h2 class="text-center">Languages</h2>
        <div class="flex justify-center gap-2 mt-4 flex-wrap">
          <img src="/images/javascript.png" alt="javascript" title="Javascript"
            class="w-10 h-10 rounded-full object-contain" />
          <img src="/images/typescript.png" alt="typescript" title="Typescript"
            class="w-10 h-10 rounded-full object-contain" />
          <img src="/images/python.png" alt="python" title="Python" class="w-10 h-10 rounded-full object-contain" />
        </div>
      </div>
      <div>
        <h2 class="text-center">Frameworks</h2>
        <div class="flex justify-center gap-2 mt-4 flex-wrap">
          <img src="/images/vue.png" alt="vue" title="Vue" class="w-10 h-10 rounded-full object-contain" />
          <img src="/images/react.png" alt="react" title="React" class="w-10 h-10 rounded-full object-contain" />
          <img src="/images/nuxt3.png" alt="nuxt3" title="Nuxt3" class="w-10 h-10 rounded-full object-contain" />
          <img src="/images/next.png" alt="next" title="Next.js" class="w-10 h-10 rounded-full object-contain" />
          <img src="/images/fastapi.svg" alt="fastapi" title="FastAPI" class="w-10 h-10 rounded-full object-contain" />
          <img src="/images/django.svg" alt="django" title="Django" class="w-10 h-10 rounded-full object-contain" />
        </div>
      </div>
      <div>
        <h2 class="text-center">ORMs</h2>
        <div class="flex justify-center gap-2 mt-4 flex-wrap">
          <div class="w-10 h-10 rounded-full bg-black">
            <img src="/images/drizzle.svg" alt="drizzle" title="Drizzle ORM"
              class="w-full h-full object-contain" />
          </div>
          <img src="/images/prisma.png" alt="prisma" title="Prisma" class="w-10 h-10 rounded-full object-contain" />
          <img src="/images/sqlalchemy.png" alt="sqlalchemy" title="SQLAlchemy"
            class="w-10 h-10 rounded-full object-contain" />
        </div>
      </div>
  </section>
</div></template>