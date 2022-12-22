import { CommandBar } from '@haydenbleasel/command-bar';
import { allWorkPosts } from 'contentlayer/generated';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { navigation } from '@/data';

const ShortcutBar: FC = () => {
  const router = useRouter();

  return (
    <CommandBar.Dialog className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-50/80 backdrop-blur-sm dark:bg-zinc-800/80">
      <CommandBar.Container className="w-full max-w-xl rounded-md border border-zinc-200 bg-white drop-shadow-2xl transition-transform dark:border-zinc-700 dark:bg-zinc-900">
        <CommandBar.Input className="w-full bg-transparent px-3 py-3 text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white dark:placeholder:text-zinc-600" />
        <hr className="border-t border-zinc-200 dark:border-zinc-700" />
        <CommandBar.List className="h-full max-h-[25rem] min-h-[15rem] overflow-auto p-4 text-sm text-zinc-500 dark:text-zinc-400">
          <CommandBar.Empty>Empty State</CommandBar.Empty>
          <CommandBar.Loading />
          <CommandBar.Group
            className="mb-4 space-y-1 last:mb-0"
            heading="Pages"
          >
            {navigation.map((page) => (
              <CommandBar.Item
                key={page.href}
                onSelect={async () => router.push(page.href)}
                className="-mx-2 flex cursor-pointer items-center justify-between gap-2 rounded-sm p-2 text-base text-zinc-900 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
              >
                {page.label}
              </CommandBar.Item>
            ))}
          </CommandBar.Group>
          <CommandBar.Group className="mb-4 space-y-1 last:mb-0" heading="Work">
            {allWorkPosts.map(({ slug, role, company }) => (
              <CommandBar.Item
                key={slug}
                onSelect={async () => router.push(slug)}
                className="-mx-2 flex cursor-pointer items-center justify-between gap-2 rounded-sm p-2 text-base text-zinc-900 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
              >
                {role} at {company}
              </CommandBar.Item>
            ))}
          </CommandBar.Group>
        </CommandBar.List>
      </CommandBar.Container>
    </CommandBar.Dialog>
  );
};

export default ShortcutBar;
