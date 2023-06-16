<div className='mt-10 pb-32'>
      <h1 className='text-md mb-2 font-light text-gray-400'>
        {currentComponentData.name}
      </h1>
      <div className='container text-white'>
        <ComponentPlayground isCentered>
          <currentComponentData.component />
        </ComponentPlayground>
        <div className='mt-8'>
          <CodeBlock code={code} lang='tsx' />
        </div>
        {Boolean(twConfig) ? (
          <div className='mt-8'>
            <CodeBlock
              code={twConfig}
              lang='tsx'
              fileName='tailwind.config.js'
            />
          </div>
        ) : null}
      </div>
    </div>
