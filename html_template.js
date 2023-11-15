export const main_template = `
<details id="@id" class="category">
    <summary class="prevent-select">
      <h1>@title <span id="description">@description</span></h1>
    </summary>
<table>
    <thead>
    <tr>
        <th>NAME</th>
        <th>WORK NUMBER</th>
        <th>KEY</th>
        <th>EDITOR</th>
        <th style="text-align: center">DIFFICULTY</th>
    </tr>
    </thead>
    <colgroup>
        <col width="230px" /> <!--NAME-->
        <col width="200px" /> <!--WORK NO.-->
        <col width="120px" /> <!--KEY-->
        <col width="200px" /> <!--EDITOR-->
        <col width="150px" /> <!--DIFFICULTY-->
        <col width="40px" /> <!--VIEW-->
    </colgroup>
    <tbody>
    @body
    </tbody>
</table>
</details>
`;

export const table_row = `
        <tr>
            <td>@name</td>
            <td>@work</td>
            <td>@key</td>
            <td>@editor</td>
            <td class="diff"><span class="@dclass diff">@diff</span></td>
            <td><a href="@href" target="_blank"><img src="img/view.png" width="20px" height="20px"></a></td>
            <td><a href="@href" download><img src="img/download.webp" width="20px" height="20px"></a></td>
        </tr>
`;