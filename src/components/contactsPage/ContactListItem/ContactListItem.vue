<template>
  <div class="list__wrapper">
    <ul class="list">
      <li class="mail"><a href="mailto:support@bjgroup.com">Email:support@bjgroup.com</a></li>
      <li class="list__item">
        <img src="../../../assets/icons/meta.png" alt="meta" class="list__img" />
        <span> @metamark </span>
      </li>
      <li class="list__item">
        <img src="../../../assets/icons/instagram.png" alt="instagram" class="list__img" />
        <span> @metamark </span>
      </li>
    </ul>
    <ul class="list">
      <li class="tel"><a href="tel:+1 (985) 331 7059">Phone:+1 (985) 331 7059</a></li>
      <li class="list__item">
        <img src="../../../assets/icons/telegram.png" alt="telegram" class="list__img" />
        <span>@MarkFusion</span>
      </li>
      <li class="list__item">
        <img src="../../../assets/icons/discord.png" alt="discord" class="list__img" />
        <span>@MarkFusion</span>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style>
.tel {
  width: 100%;
}

.mail {
  width: 100%;
}

.list__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: row; /* изменяем направление на колонку */
  justify-content: space-between;
}

.list__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.list__img {
  max-width: 20px;
  height: 15px;
}
</style>
