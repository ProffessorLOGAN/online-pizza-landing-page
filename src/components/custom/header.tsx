import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { Phone, ShoppingBasket } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-white ">
      <nav className="container py-4 flex item-center justify-between ">
        <div className="flex items-center mx-auto space-x-4">
          <Image
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcCAwj/xABJEAABAwMBBQMGCQcLBQAAAAABAAIDBAURBgcSITFBE1FhFBZxkZKhIiMyUlNVgbHRFRdCVILB0iQ0NkNydJTC0+HwNXODk7L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMxEAAgEDAgIHBwQDAQAAAAAAAAECAwQREiExUQUTIjJBgZEUFTNTcaHRYbHB8EJS4TT/2gAMAwEAAhEDEQA/AO4oAgCAgoBlAAgJQBAEAQBAEAKAjKAZQEoAgCAhASgCAICCEAwgHJASgCAIAgCAIAgIwgGEBKAIAgCAIAgIQEoAgCAhASgCAIAgIQEoAgCAIAgCAIAgCAIAgCAIAgIQGHV3W30f87rqaHHPtJWt+8plGtOhVqdyLf0Rhedmn/rqg/8Ae1V1R5m/u+7+W/QyKW+2mrOKa50cvg2Zp/erZRlO1uKffg15GxaQQCCCD1CGBKAIAgCAIAgCAgICUAQBAEB4mljhY6SV7WMaMuc44AHihKTk8LiaH8s1l0O7YKZrof16pBbEf7I5v9w8VGc8DtdtCj/6Hv8A6rj5+C/uwls8ZiM1+uk9Q0cXAydhCP2WkZ+0lRjmI3LzpoQS8sv7/wAGs84dHWw7tJHTvcOGaemzn9rHH1quuCOtdH9JVt5Z82fN20GyA7vkNWW+ETP4lHWRNF0Fd/7L1f4PB1TpG48K2iDc/TUgPvGVKnAe6+kqPw5ejM2htVkrMy6bustJJjlS1GWj0xuyPcFbCfA56txdU+zdU8/Vfyfd1wvlm43KmbcqRp41NG3dkaO90fX7PUmWuJmqNrcfClolyfB/R/k3dtuVHc6YVNDOyaI9Wnke4joVOTjrUalCWmosMzFJkEAQEFACUBCA9IAgCAw7pcKa10UtZWytihjGST17gO8lDSlRnWmqdNZbNBQUlTqV7LjeWOjoM71LQHk4dHyd57hyVVvud9WpCzzSoPMvGX8L8nx1XrOmshdR0IjmrWjBaT8CL+14+CSlpNOjuip3fbm8R+7/ALzOZ3K8VN1l7avq3TO6Au+C30DkFztyZ9dQtaNutNKOP3PVDa7jcADQ0M87fnMYcevkii3wIq3dvR+JNI2PmdqLd3vyW/0drHn/AOlPVyORdMWWca/3/BgVtpuNvBNdQ1EI+c5h3fWOHvUOLR1Uby3rfDmmYUc4jeJIpdx45OY7BH2hRubyjGSxJZRcNO7QKiic2C7P8qp+Xa/1jP4h71rGb4M8K96Cp1MyobPl4Fpq7Yyqa2/aTqI46p43iGH4qpHc4d/itMeKPFpXGh+zXkcx+8fobPTl/hvULxumCshO7UUz/lRu/BSnk57u0lbSW+Yvg/Bm6UnIEBBQEID1hAEAQBAeHxteMOa1w8RlBv4HpowMID5mKPJJjZxPzQhOWvEdlF9Gz2Qg1Pme2sDQA0ADuCEE4QEFoIwQCPEIDx2Mf0bPZCE6pcx2EX0bPZCDU+Z7YxrBhoAHcAhBAjaHFwaMnrjig3PaAIAgIwgJQBAVTVmvLZpSshpbhBWSyTRmQeTsaQBnHHLgqSmo8TelQnVTaNC7bNYB8m33Y/8Aji/1FXrYmnsVTmjyNs9kz/0u6Y792L+NOtiT7FPmiyab13YtRzCCgqnR1JGfJ6hu48+jofsJVozizGpQqU92iu7ZNS3Gy0lvo7XO+mdWdo6SZhw4NZu8Aemd7n4KtSWEa2lKM23LwNBsg1NeKvUT7XXV1RWU8lO+QeUPMjo3NI4hx44OSPUq0pPOGbXdKChqSwdoW55wQBAQgJQBAEAQBAEAQBAEBStqNkttVpe53OoooX11PSnsagt+GzByAD3cT61SaWMnRbTkqiSZ+e3HAJ7gubB6yOl3bZlS02i23yjrak1bKNlTNDLuljvghzg3DQR1xklauksZRxU7pyqaWtjnEE81NNHU00hjnicHxvacFrhyKyW252tJ7M7lerzovUtgom6luFLFM6Jk3ZsmxNC5zQeQyRwPJdDcWu0eVThWhN6EYeh7loW1XmO26cdWVNdXHs/KJI3HgAXYyQABwPIelRBwTwi9eFeUdU+CLDd9o2nbNdZ7ZXy1DKiAgPLadzm8Wh3MeBCs5xTwZxtqk46kY/51dI/r0/8AhZPwUdbDmT7JW5fdGXaNoem7vcYbfQ1crqickRtfA9gccZxkjHRSpxbwis7apCOqS2MWfajpenq56aeepZJDK6J/8mcRlpIOMZ7lHWRRZWtVpNIj86mkf16f/CSfgnWxHslXl90bPT+t7DqKtdR2qrfJO2Mybj4nMy0EA4yBnmFZTUuBnUoTprMkZt71JZ7DGH3WvhpyRlsZdl7/AENHEo5JcSsKc591FXh2uaXkn7N3l0Tc4Er6f4J9RJ9yr1sTd2dVLJdLdcaS50kdXb6iOop5PkSRuBBV08nNKLi8MylJAQBAEBW9pH9BL3/dXKs+6za3+LE/NTwXMcBzIIXMewjqN/2nUFbo99nttHWMqpacU7nTNYGNbugOIIcc8OAWspprBw07WUamqTOfWOz1d+ucNut8ZdNMcE4OI29XOPQD/ZZJZeDsnNQWpl22qaLodP0tPcqGeoc6eYRPikLSxoDOG7gAj5PUlXqQSWTlta8ptxZrNkEQl15RkjPZQzPHgd3d/wAyrS7xpdfCfkWKfRVRqnaPfH3GOtpLc1+8J2xFvbEBrQGOcMHke9X0ZmzBXCp0Y6eJR9YQWWjvMlFp4Supqb4uSeWXfMrxzI6YHLx4rOeM4R1UXOUcz8To2x3SHk0I1HcY/jpWkUbHDO4w/p+k9PD0rWlDG7OO7rZehGk0vs/F8qrvcdSGvt1LHUPe1ro+yLwSXF2Xt+Tg9B38VEaeW2zSpc6FGMN3got6dbnXSo/IsUjKAO3YA95e+QD9I+nngLN4zsdcNelauJ2/ZbpAaftPltfHu3OsaC/POFnRngep8fQt4RwjzLmt1ksLgitwbI6qqrqypvt5c2J0ruycxxklezJ3S97+uOnFV6vfdmzvEklCJRta6dg03dm0tLcYq6F7N9rmlu+w5wQ8Dke5ZzjpZ00KvWRy1hl+2CT1DorzTuc40zHRPYDyDzvb2PsDVpRfFHNfJZizra2OAhASgCArG0qRjdCXreIGactGepJAAVZ91m1v8WJ+bHkhjiOgJXLnJ7CO40GyXTUsEE5nuMjXsa/HbtDTkZ6Nz71uqUTzHeVM4LnYtPWuwU5htNHHTtdjecBl78fOceJWiSXA551JTeZMpO3Vw83beM8fLeX7DlnV7p02Xff0KbsX/pu3+5y/e1Z0u8dN38LzL/tX1abFaxb6GXduNa0gObzij5F3gTyH29y1qT0o47Wjrll8Ecw2c6W85Ly01IxbKTD6lzuAd3R58evgPQsaccvc77ir1cduPgdKpNZT1+0iCx2eeB1nhiIl7NgO85rTndd3DLRw7itVPMsI4XQUaOuXE1W2bVvZxjTlBIQ+QB1a9p5N6R/bzPhjvUVJ42NLOll635Gg2U6Yirqx1+uxZHbaF3xZlIDZJRxySeG637/Qq04+LNbqq0tEeLLFS69ulyrNVz2+WJ9vt9G+SjHZjJOcBxPXk4q+tvJi7eMVBPi3ucuZXVF2uMMd7u1W6CaVrZpppXP3Gk8TgnGB6llnPE7tKgm4o2uurHZLDV0dNYLh5cx8RdNJ2zJN12eA+AABwSaSexShVnUTc1gu2xO6WqhoKulqq6CGtqqxojhe8Bz/AIIAwOvHK0pNYOW9jJyTxskdcWxwhAEAQHM9pulNS6lu1OLW5n5OjgALJKksaZN52Tu+jd4rKcW+B2W1anSXa4lQGyLU5479sHgal/8AAs+qkb+2Uv1L3s00tqHT1XVG+VglpzC2OniZVPkYzjxw0gAcMclrCLXE5rirTqJaUX8rQ5TkWtdDat1JqOrqWSweQ7/8ljnqnYY3dAOGgHGSMrGcJSZ3Ua9KnBLxNZbdl2raCvgnirKSnw8B8lNWPa8MJG8AQ0dPFVVOSeTSV3SaxgydS7ONWXvUFdcJJ6CQSyns3STuaRGODQBunGB0z3qZU5NlaVzShBLDNd+afVrYjEJqHsnHJYKt+6T4jcUdXIv7ZS44LBs/2f37T9/dX1pomsbTSRxmOQvw92AOGBw4K0INPLMq9zCpDSjQ1GyvV1bUTVVVNbnzzPL5HvqXZc4nJPyFV0pM1V3SSSR5fsn1Y6MRumoHRt5MNW/dHoG7hR1UuBKvKWclw2a6GuFgfdhfW0r4qyFsIZFIX7w+FvA5A71pCDjnJzXNeNTGnwKtd9kF5hry2zTU09E53wHTylj4x3O4HOO8epUdJ+BvC8hp7XE2d22QOZY6ZtpqWy3SJxdO6YljJgejee7jHDvycnus6W2xSN7mfa4GXs32c1NpuTbrqBsXbw/zaBjg8NPV5PLPdj09ymFPG7K3Fypx0wOqLU4ggCAIAgCAx66upqCAz1krYogcF7uQQvTpzqS0wWWa3zssH1rTe0q6o8zq93Xfy2POuwfWtN7SakPd138tjzrsH1rTe0mpD3dd/LZ9otR2WX5F1o/tmaPvU6kUlZXMeNN+h6ff7OwZddaLH/fb+KakVVncN4VN+jMc6rsH1rTe2o1Lma+7rv5b9B512D61pvaTUh7uu/lseddg+tab2k1Ie7rv5b9B52WD61pvaTUuY93Xny36GXb7zbrm97KCqjnLAC7c44ypTTMa1tWo46yLWeZnqTAgICUAQEAoCUAQBAfKogiqIXwzxtkjeMOa4ZBBQmMpReqLw0ct1Xouotrn1Vsa6ej5lg4vi/EeKwlTxuj67o7pmFbFOs8S58/+lQBWR7pJQEc0A5IAEBKAIMm505puuv0o7FvZUwPxlQ4cB4DvKvGDZ5990lStFh7y5fk65ZbTR2iiZTUUe60cXOPynnvJ710JJLCPirm5qXNR1Kj3/Y2CkwCAgoAUBAQHpAEAQEIARlAVm+6Jtl1LpY2mkqTxMkIGHHxbyPuKpKCZ6ln0tcW3Z70eTKTctB3qjcXU7I6yPvidh3sn92Vm6bR79Dpy1qbT7L+3qV6pt1dSOIqqKpix8+IgetZuLR6cLmhU7k0/MxlGDXUuZ9YaaonOIKeaUn6OMu+4KcMpKrTj3pJeZu6DRt9rSMUfYMP6dQ7cHq5+5WVNs8+t0xaUv8sv9C4WbZ5RUxbLcpTVyD+rA3Yx+8/84LWNNI8S66drVOzSWlfcucMLIY2xxMaxjRhrWjAAWh4bbbyz6IQEAQEFAEAwgJQBAEAQBAEBGEBGEBHZt+Y31JgnLPQaByQh7jAQjBKEhAEAQBAQUAwgJQBAEAQBAEAQBAEAQBAQgJQBAEAQEICUAQBAEAQBAEAQBAEAQBAEAQEBASgCAIAgCAIAgCAICOqAYQBASgCAIAgCAICEA6IAAgJQBAEAQH//2Q=="
            width={40}
            height={40}
            alt="Picture of the author"
          />

          <Select>
            <SelectTrigger className="w-[180px] focus:ring-0">
              <SelectValue placeholder="Select Restaurant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Dominose</SelectItem>
              <SelectItem value="dark">Pizzahut</SelectItem>
              <SelectItem value="system">MaccDonnalds</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-x-4">
          <ul className="flex items-center font-medium space-x-4">
            <li>
              <Link className="hover:text-primary" href={"/"}>
                Menu
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href={"/"}>
                Order
              </Link>
            </li>
          </ul>
          <div className="relative">
            <Link href={"/cart"}>
              <ShoppingBasket className="hover:text-primary" />
            </Link>
            <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-primary font-bold text-white">
              3
            </span>
          </div>
          <div className="flex items-center gap-1 ml-12">
            <Phone />
            <span>+91 9800 098 998</span>
          </div>
          <Button size={"sm"}>Logout</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
