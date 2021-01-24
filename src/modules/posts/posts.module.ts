// import { Module } from '@nestjs/common';
// import { PostsService } from './posts.service';
// import { PostsController } from './posts.controller';

// @Module({
//   providers: [PostsService],
//   controllers: [PostsController]
// })
// export class PostsModule {}

import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.providers';

@Module({
  providers: [PostsService, ...postsProviders],
  controllers: [PostsController],
})
export class PostsModule {}
