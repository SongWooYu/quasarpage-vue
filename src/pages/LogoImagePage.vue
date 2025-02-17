<template>
    <div>
        <q-page class="flex flex-center">
            <img
                alt="DY logo"
                src="~assets/dy-logo.png"
                style="width: 400px; height: 300px"
            >
            <div class="text-h6">DY Quasar App</div>
                <q-btn
                 color="primary"
                 label="setting"
                 @click="$router.push('/setting')" 
                 class="q-mx-sm"
                 />

                 <q-btn
                 color="primary"
                 label="DY Setting"
                 @click="$router.push('/password')" 
                 class="q-mx-sm"
                 />
        </q-page>
    </div>
</template>